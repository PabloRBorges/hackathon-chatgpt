using Core.interfaces;
using OpenAI_API;
using OpenAI_API.Chat;
using OpenAI_API.Models;
using OpenAI_API.Moderation;
using System;

namespace Core.services
{
    public class ChatGPT : IChatGPT
    {
        private readonly OpenAIAPI _openAIAPI;
        private readonly string PRIVATE_KEY_CHATGPT = "private_key_chat";

        public ChatGPT()
        {
            _openAIAPI = new OpenAIAPI(Environment.GetEnvironmentVariable(PRIVATE_KEY_CHATGPT));
        }

        public async Task<string> SendMessageAsync(string message)
        {

            var valor = Environment.GetEnvironmentVariable(PRIVATE_KEY_CHATGPT);

            var result = await _openAIAPI.Chat.CreateChatCompletionAsync(new ChatRequest()
            {
                Model = Model.ChatGPTTurbo,
                Temperature = 0.1,
                MaxTokens = 50,
                Messages = new ChatMessage[] {
            new ChatMessage(ChatMessageRole.User, "Hello!")}});
                        
            var results= await _openAIAPI.Chat.CreateChatCompletionAsync(message);

            var reply = results.Choices[0].Message;
            //Console.WriteLine($"{reply.Role}: {reply.Content.Trim()}");
            //Console.WriteLine(results);

            return reply.Content;
        }
    }
}
