using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using TextConverterService;

namespace TextConvertWebApi.Controllers
{
    [AllowAnonymous, ApiController, Route("api/[controller]")]
    public class MainController : ControllerBase
    {
        private readonly IMainService _mainService;
        public MainController(IMainService mainService)
        {
            _mainService = mainService;
        }

        [HttpGet, Route("get-encoded-input-async/{input}")]
        public async Task<IActionResult> GetEncodedStringAsync(string input)
        {

            try
            {
                string? encodedText = await _mainService.ProcessRequest(input);

                if (!string.IsNullOrEmpty(encodedText))
                {
                    foreach (var character in encodedText)
                    {
                        await Response.Body.WriteAsync(Encoding.UTF8.GetBytes(character.ToString()));
                        await Response.Body.FlushAsync();
                        await Task.Delay(TimeSpan.FromSeconds(new Random().Next(1, 6)));
                    }
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }                
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
    }
}
