using Core.Adapter;
using Core.builder;
using Core.interfaces.Adapter;
using Core.interfaces.Repositories;
using Core.interfaces.Services;
using Core.models.Repositories;
using Core.models.Requests;
using Core.models.Responses;

namespace Core.services
{
    public class ChatGPTServices : IChatGPTServices
    {
        private readonly IChatGPTAdapter _chatGPT;
        private readonly IChatGPTRepository _chatGPTRepository;

        public ChatGPTServices(IChatGPTAdapter chatGPT, IChatGPTRepository chatGPTRepository)
        {
            _chatGPT = chatGPT;
            _chatGPTRepository = chatGPTRepository;
        }

        public async Task ChatAnalisesGPTAsync(ChatRequest chatRequest)
        {

            throw new NotImplementedException();
        }

        public async Task FellAnalisesGPTAsync(ChatRequest chatRequest)
        {
            if (chatRequest == null)
                throw new Exception("ChatRequest is null");

            var clientmodel = new ClientsModel()
            {
                Cidade = chatRequest.Cidade,
                ContactHating = chatRequest.ContactHating,
                DisparoContratado = chatRequest.DisparoContratado,
                Idade = chatRequest.Idade,
                Nome = chatRequest.Nome,
                SetorDeCancelamento = chatRequest.SetorDeCancelamento,
                Sexo = chatRequest.Sexo,
                TempoContrato = chatRequest.TempoContrato,
                TempodaPrimeiraMensagem = chatRequest.TempodaPrimeiraMensagem,
                UsoDeDisparo = chatRequest.UsoDeDisparo
            };

            await _chatGPTRepository.CreateAsync(clientmodel);

            var builder = new MakeMessages();
            var messageGpt = builder.CreateMessageToFels(chatRequest);

            var fell = await _chatGPT.SendMessageAsync(messageGpt);

            await _chatGPTRepository.UpdateAsync(clientmodel.Nome, clientmodel);
        }

        public async Task<List<ClientResponse>> GetAllClientsWithFeel()
        {
            var clientList = await _chatGPTRepository.GetListClientsAsync();

            //TODO: CONSULTA A LISTA DE HISTÓRICO E SALVA NO CLIENTE REPONSE
            var result = new List<ClientResponse>();
            foreach (var item in clientList)
            {
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
                    UsoDeDisparo = item.UsoDeDisparo
                    //HistoricFeel = item.HistoricFeel, - Busca pelo cliente na lista de histórico
                };

                result.Add(itemList);
            }

            return result;
        }
    }
}
