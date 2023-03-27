using Core.interfaces.Services;
using Core.models.Responses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.ChatGPT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeelsClientsController : ControllerBase
    {
        private readonly IChatGPTServices _chatGPTServices;

        public FeelsClientsController(IChatGPTServices chatGPTServices)
        {
            _chatGPTServices = chatGPTServices;
        }

        //Get all feel by client
        [HttpGet("{clientId}")]
        public async Task<ICollection<HistoryFeelsResponse>> GetHistoricByClientId([FromRoute] string clientId)
        {
            if (clientId == null)
                return null;

            var result = await _chatGPTServices.GetHistoricFeelResponse(clientId);
            return result;
        }
    }
}
