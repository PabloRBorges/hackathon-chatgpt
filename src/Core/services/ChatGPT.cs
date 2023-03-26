using Core.builder;
using Core.interfaces;
using Core.interfaces.Services;
using Core.models;
using Newtonsoft.Json;
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

        public async Task<string> SendMessageAsync(PromptFormat message)
        {

            var messageserialize = JsonConvert.SerializeObject(message);

            var result = await _openAIAPI.Chat.CreateChatCompletionAsync(new ChatRequest()
            {
                Model = "curie:ft-casa-2023-03-26-06-35-39",
                Temperature = 0,
                MaxTokens = 1,
                Messages = new  ChatMessage[] {
            new ChatMessage(ChatMessageRole.User, messageserialize)}});
                        
            var results= await _openAIAPI.Chat.CreateChatCompletionAsync(JsonConvert.SerializeObject(message));


            var reply = results.Choices[0].Message;
            
            return reply.Content;
        }
    }
}
