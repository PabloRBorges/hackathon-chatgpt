using Core.builder;
using Core.interfaces.Repositories;
using Core.interfaces.Services;
using Core.models.Repositories;
using Core.models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.services
{
    public class SendMessagesToGPT : ISendMessagesToGPT
    {
        private readonly IChatGPT _chatGPT;
        private readonly IChatGPTRepository _chatGPTRepository;

        public SendMessagesToGPT(IChatGPT chatGPT, IChatGPTRepository chatGPTRepository)
        {
            _chatGPT = chatGPT;
            _chatGPTRepository = chatGPTRepository;
        }

        //Grava no banco
        //Prepara o builder
        //Envia para o GPT
        //Update no banco


        public async Task ChatAnalisesGPTAsync(ChatRequest chatRequest)
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


        }

        public Task FellAnalisesGPTAsync(ChatRequest chatRequest)
        {
            throw new NotImplementedException();
        }
    }
}
