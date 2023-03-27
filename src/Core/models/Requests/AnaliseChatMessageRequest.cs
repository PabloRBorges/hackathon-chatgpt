using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.models.Requests
{
    public class AnaliseChatMessageRequest
    {
        public string Messages { get; set; }
        public string ClientId { get; set; }
    }
}
