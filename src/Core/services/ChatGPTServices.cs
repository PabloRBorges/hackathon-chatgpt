using Core.interfaces;
using Core.models;
using Newtonsoft.Json;
using OpenAI_API;
using OpenAI_API.Chat;
using OpenAI_API.Completions;
using OpenAI_API.Models;
using RestSharp;

namespace Core.services
{
    public class ChatGPTServices : IChatGPTServices
    {
        private readonly OpenAIAPI _openAIAPI;
        private readonly string PRIVATE_KEY_CHATGPT = "private_key_chat";

        public ChatGPT()
        {
            _openAIAPI = new OpenAIAPI(Environment.GetEnvironmentVariable(PRIVATE_KEY_CHATGPT));
        }

        public async Task<string> SendMessageAsync(string message)
        {
            var result = await _openAIAPI.Completions.CreateCompletionAsync(new CompletionRequest(message, model: "curie:ft-casa-2023-03-26-06-35-39",max_tokens:1, temperature: 0));
    
            return result.Completions[0].Text;
        }
    }
}
