using Core.interfaces.Repositories;
using Core.interfaces.Services;
using Core.services;
using Infrastructure.Repositories.MongoDb;
using Microsoft.OpenApi.Models;
using System;

namespace ProjectChapGPT.API.Api
{
    public class Startup
    {
        private readonly string _myAllowSpecificOrigins = "MyAllowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.Configure<ModelSettings>(options =>
            {
                options.ConnectionString = Configuration.GetSection("CONNECTION_STRING_MONGODB").Value;
                options.DatabaseName = Configuration.GetSection("NOME_DO_BANCO").Value;
                options.CollectionName = Configuration.GetSection("COLLECTION_NAME").Value;
            });

            services
                .AddScoped<IChatGPTServices, ChatGPTServices>()
                .AddTransient<ISendMessagesToGPT, SendMessagesToGPT>();

            services
                .AddSingleton<IChatGPTRepository, ChatGPTRepository>()
                .AddSingleton<IChatGPTHistoryRepository, ChatGPTHistoryRepository>()
                .AddSingleton<IHistoryFeelsChatRepository, HistoryFeelsChatRepository>();



            services.AddCors(options =>
            {
                options.AddPolicy(name: _myAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:3000",
                                                          "https://localhost:3000",
                                                          "*").AllowAnyHeader()
                                                          .AllowAnyMethod();
                                  });
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Api", Version = "v1" });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Api v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(_myAllowSpecificOrigins);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }


    }
}
