using Core.interfaces.Services;
using Core.models.Responses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.ChatGPT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoricChatMessagesController : ControllerBase
    {
        private readonly IChatGPTServices _chatGPTServices;

        public HistoricChatMessagesController(IChatGPTServices chatGPTServices)
        {
            _chatGPTServices = chatGPTServices;
        }

        [HttpGet]
        public async Task<ICollection<HistoryChatMessagesResponse>> GetAll()
        {
            var result = await _chatGPTServices.GetAllMotivations();
            return result;
        }

        [HttpPost]
        public async Task Post([FromBody] string clientId, string messages)
        {
            await _chatGPTServices.CreateChatMessages(messages, clientId);
        }

    }
}
