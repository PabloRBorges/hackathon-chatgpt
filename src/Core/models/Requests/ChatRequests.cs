using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.models.Requests
{
    public class ChatRequests
    {
        public string? TenantId { get; set; }
        public string? TenantName { get; set; }

        public object? body { get; set; }
    }
}
