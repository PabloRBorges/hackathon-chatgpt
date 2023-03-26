using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.models
{
    public class PromptFormat
    {
        [JsonProperty("prompt", NullValueHandling = NullValueHandling.Ignore)]
        public string prompt { get; set; }

    }
}
