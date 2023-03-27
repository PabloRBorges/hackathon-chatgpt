using Core.interfaces.Adapter;
using OpenAI_API;
using OpenAI_API.Completions;
using OpenAI_API.Models;

namespace Core.Adapter
{
    public class ChatGPTAdapter : IChatGPTAdapter
    {
        private readonly OpenAIAPI _openAIAPI;
        private readonly string PRIVATE_KEY_CHATGPT = "private_key_chat";

        public ChatGPTAdapter()
        {
            //_openAIAPI = new OpenAIAPI(Environment.GetEnvironmentVariable(PRIVATE_KEY_CHATGPT));
            _openAIAPI = new OpenAIAPI("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");
        }

        public async Task<string> VerifyChatMessages(string message)
        {
            var arguments = $"Com base na conversa no texto entre os pipes |{message}| entre um cliente e um bot, informe qual foi o motivo de cancelamento do seviço pelo cliente: (financeiro, suporte ruim, Concorrente), a resposta só pode coter uma das três opções.";

            var result = await _openAIAPI.Completions.CreateCompletionAsync(new CompletionRequest(arguments, model: Model.DavinciText , temperature: 0.7));

            return result.Completions[0].Text;
        }

        public async Task<string> VerifyFeelClientAsync(string message)
        {
            var result = await _openAIAPI.Completions.CreateCompletionAsync(new CompletionRequest(message, model: "curie:ft-casa-2023-03-26-06-35-39", max_tokens: 1, temperature: 0));

            return result.Completions[0].Text;
        }
    }
}
