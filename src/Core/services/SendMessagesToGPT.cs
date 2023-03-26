using Core.builder;
using Core.interfaces;
using Core.interfaces.Repositories;
using Core.interfaces.Services;
using Core.models.Repositories;
using Core.models.Requests;

namespace Core.services
{
    public class SendMessagesToGPT : ISendMessagesToGPT
    {
        private readonly IChatGPTServices _chatGPT;
        private readonly IChatGPTRepository _chatGPTRepository;

        public SendMessagesToGPT(IChatGPTServices chatGPT, IChatGPTRepository chatGPTRepository)
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

            //Prepara mensagem
            var builder = new MakeMessages();
            var messageGpt = builder.CreateMessageToFels(chatRequest);

            var fell = await _chatGPT.SendMessageAsync(messageGpt);

            //Atualiza novamente o mongo db
            await _chatGPTRepository.UpdateAsync(clientmodel.Nome, clientmodel);
        }
    }
}
