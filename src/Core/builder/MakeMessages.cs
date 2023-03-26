using Core.models;
using Core.models.Requests;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.builder
{
    public class MakeMessages
    {

        public string CreateMessageToFels(ChatRequest chatRequest)
        {
            var message = string.Format(@"Nome {0} tem {1} anos e mora em {2}, é do sexo {3}, tem contrato com a empresa desde {4}, tem usado {5}% de disparos de mensagens de {6} contratados, ele(a) tem entrado em contato com o suporte {7} vezes esse mês, e demorou {8} dias para mandar a primeira mensagem. ->",
                                        chatRequest.Nome,
                                        chatRequest.Idade,
                                        chatRequest.Cidade,
                                        chatRequest.Sexo,
                                        chatRequest.TempoContrato,
                                        chatRequest.UsoDeDisparo,
                                        chatRequest.DisparoContratado,
                                        chatRequest.ContactHating,
                                        chatRequest.TempodaPrimeiraMensagem
                                        );

            return message;
        }
    }


}
