﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.interfaces
{
    public interface IChatGPT
    {
        Task<string> SendMessageAsync(string message);
    }
}