using Core.Adapter;
using Core.builder;
using Core.interfaces.Adapter;
using Core.interfaces.Repositories;
using Core.interfaces.Services;
using Core.models.Repositories;
using Core.models.Requests;
using Core.models.Responses;
using System.Diagnostics.Contracts;

namespace Core.services
{
    public class ChatGPTServices : IChatGPTServices
    {
        private readonly IChatGPTAdapter _chatGPT;
        private readonly IChatGPTRepository _chatGPTRepository;
        private readonly IChatGPTHistoryRepository _chatGPTHistoryRepository;
        private readonly IHistoryFeelsChatRepository _historyFeelsChatRepository;


        public ChatGPTServices(IChatGPTAdapter chatGPT, IChatGPTRepository chatGPTRepository, IChatGPTHistoryRepository chatGPTHistoryRepository, IHistoryFeelsChatRepository historyFeelsChatRepository)
        {
            _chatGPT = chatGPT;
            _chatGPTRepository = chatGPTRepository;
            _chatGPTHistoryRepository = chatGPTHistoryRepository;
            _historyFeelsChatRepository = historyFeelsChatRepository;
        }


        public async Task CreateChatAnalisesGPTAsync(ChatRequest chatRequest)
        {
            if (chatRequest == null)
                throw new Exception("ChatRequest is null");

            var clientmodel = new ClientsModel()
            {
                ClientId = chatRequest.ClientId,
                Cidade = chatRequest.Cidade,
                ContactHating = chatRequest.ContactHating,
                DisparoContratado = chatRequest.DisparoContratado,
                Idade = chatRequest.Idade,
                Nome = chatRequest.Nome,
                SetorDeCancelamento = chatRequest.SetorDeCancelamento,
                Sexo = chatRequest.Sexo,
                TempoContrato = chatRequest.TempoContrato,
                TempodaPrimeiraMensagem = chatRequest.TempodaPrimeiraMensagem,
                UsoDeDisparo = chatRequest.UsoDeDisparo,
                Status = chatRequest.Status,
            };

            var client = await _chatGPTRepository.GetClientAsync(clientmodel.ClientId);

            if(client != null)
                await _chatGPTRepository.RemoveAsync(clientmodel.ClientId);
            
            await _chatGPTRepository.CreateAsync(clientmodel);

            var builder = new MakeMessages();
            var messageGpt = builder.CreateMessageToFels(chatRequest);

            var feel = await _chatGPT.VerifyFeelClientAsync(messageGpt);

            var feelmodel = new HistoryModel()
            {
                Feel = feel,
                ClientId = clientmodel.ClientId,
                Date = DateTime.Now
            };

            await _chatGPTHistoryRepository.CreateAsync(feelmodel);
        }

        public async Task CreateChatMessages(AnaliseChatMessageRequest messages)
        {
            var result = await _chatGPT.VerifyChatMessages(messages.Messages);

            var createChat = new HistoryFeelsChatModel()
            {
                ClientId = messages.ClientId,
                Text = messages.Messages,
                Motivo = result.Replace(".","").Replace("\n","").Replace(" ",""),
                Date = DateTime.Now
            };

            await _historyFeelsChatRepository.CreateAsync(createChat);
        }

        //public async Task FellAnalisesGPTAsync(ChatRequest chatRequest)
        //{
        //    if (chatRequest == null)
        //        throw new Exception("ChatRequest is null");

        //    var clientmodel = new ClientsModel()
        //    {
        //        Cidade = chatRequest.Cidade,
        //        ContactHating = chatRequest.ContactHating,
        //        DisparoContratado = chatRequest.DisparoContratado,
        //        Idade = chatRequest.Idade,
        //        Nome = chatRequest.Nome,
        //        SetorDeCancelamento = chatRequest.SetorDeCancelamento,
        //        Sexo = chatRequest.Sexo,
        //        TempoContrato = chatRequest.TempoContrato,
        //        TempodaPrimeiraMensagem = chatRequest.TempodaPrimeiraMensagem,
        //        UsoDeDisparo = chatRequest.UsoDeDisparo,
        //        ClientId= chatRequest.ClientId,
        //        Status = chatRequest.Status
        //    };

        //    await _chatGPTRepository.CreateAsync(clientmodel);

        //    var builder = new MakeMessages();
        //    var messageGpt = builder.CreateMessageToFels(chatRequest);

        //    var fell = await _chatGPT.VerifyFeelClientAsync(messageGpt);

        //    await _chatGPTRepository.UpdateAsync(clientmodel.Nome, clientmodel);
        //}

        public async Task<ICollection<ClientResponse>> GetAllClientsWithFeel()
        {
            var clientList = await _chatGPTRepository.GetListClientsAsync();
            var result = new List<ClientResponse>();

            foreach (var item in clientList)
            {
                var feel = await _chatGPTHistoryRepository.GetHistoricAsync(item.ClientId);
                var motivo = await _historyFeelsChatRepository.GetHistoricAsync(item.ClientId);

                var motivoValue = "";
                var feelValue = "";

                if (motivo.Count > 0)
                    motivoValue = motivo.Where(x => x.Date.Month == DateTime.Now.Month).FirstOrDefault().Motivo;

                if (feel.Count > 0)
                    feelValue = feel.Where(x => x.Date.Month == DateTime.Now.Month).FirstOrDefault().Feel;

                var itemList = new ClientResponse()
                {
                    ClientId = item.ClientId,
                    Cidade = item.Cidade,
                    ContactHating = item.ContactHating,
                    DisparoContratado = item.DisparoContratado,
                    Idade = item.Idade,
                    Nome = item.Nome,
                    SetorDeCancelamento = item.SetorDeCancelamento,
                    Sexo = item.Sexo,
                    TempoContrato = item.TempoContrato,
                    TempodaPrimeiraMensagem = item.TempodaPrimeiraMensagem,
                    UsoDeDisparo = item.UsoDeDisparo,
                    HistoricFeel = feelValue.Replace(" ","").Replace("\n",""),
                    HistoricoMotivo = motivoValue.Replace(" ", "").Replace("\n",""),
                    Status = item.Status
                };

                result.Add(itemList);
            }

            return result;
        }

        public async Task<ICollection<MotivoCancelamentoResponse>> GetAllMotivations()
        {
            var result = await _historyFeelsChatRepository.GetListHistoricAsync();

            var test = result.GroupBy(x => x.Motivo).Select(x => new MotivoCancelamentoResponse { Valor = x.Count(), Tipo = x.Key.Replace("\n","").Replace(".","") }).ToList();
            
            return test;
        }

        public async Task<ICollection<HistoryFeelsResponse>> GetHistoricFeelResponse(string clientId)
        {
            var historicList = await _chatGPTHistoryRepository.GetHistoricAsync(clientId);
            var responseList = new List<HistoryFeelsResponse>();

            foreach (var item in historicList)
            {
                var itemList = new HistoryFeelsResponse()
                {
                    ClientId = item.ClientId,
                    Data = item.Date,
                    Feel = item.Feel.Replace(" ", "")
                };

                responseList.Add(itemList);
            }

            return responseList;
        }
    }
}
