using Core.interfaces;
using Core.interfaces.Services;
using Core.models;
using Core.models.Requests;
using Core.services;
using Microsoft.AspNetCore.Mvc;


namespace Api.ChatGPT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatGPTController : ControllerBase
    {
        private readonly IChatGPTServices _chatGPT;
        private readonly ISendMessagesToGPT _sendMessagesToGPT;

        public ChatGPTController(ISendMessagesToGPT sendMessagesToGPT)
        {
            _sendMessagesToGPT = sendMessagesToGPT;
        }

        // GET: api/<ChatGPTController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ChatGPTController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {


            return "value";
        }

        // POST api/<ChatGPTController>
        [HttpPost]
        public async Task<ChatGptResponse> Post([FromBody] ChatRequest value)
        {
            var result = _sendMessagesToGPT.FellAnalisesGPTAsync(value);

            return result;
        }

        // PUT api/<ChatGPTController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ChatGPTController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
