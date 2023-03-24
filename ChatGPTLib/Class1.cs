using System;
using System.Net.Http;
using System.Net.WebSockets;
using Newtonsoft.Json;
using OpenAI_API;

namespace ChatGPTAPI
{
    class Program
    {
        static async System.Threading.Tasks.Task Main(string[] args)
        {
            var api = new OpenAIAPI("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");
            var result = await api.Completions.GetCompletion("One Two Three One Two");
          //  var teste2 = await api.ImageGenerations.CreateImageAsync("");

            //var chat = api.Chat.CreateConversation();

          //  chat.AppendSystemMessage("Você é um fazendeiro, que passou por um período de seca, qual a melhor data para plantar arroz?");

            

            Console.WriteLine(result);



        }
    }
}
