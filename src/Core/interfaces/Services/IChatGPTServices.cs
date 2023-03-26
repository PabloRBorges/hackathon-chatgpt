﻿using Core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.interfaces.Services
{
    public interface IChatGPTServices
    {
        Task<string> SendMessageAsync(string message);
    }
}