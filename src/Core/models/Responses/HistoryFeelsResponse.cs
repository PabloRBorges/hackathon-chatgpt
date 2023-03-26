using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Core.models.Responses
{
    public class HistoryFeelsResponse
    {
        public string ClientId { get; set; }
        public DateTime Data { get; set; }
        public string Feel { get; set; }
    }
}
