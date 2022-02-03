using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project413.API.Controllers
{
    public class TokenController : ControllerBase
    {
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;

        public TokenController(ITokenService tokensService, IMapper mapper)
        {
            _tokenService = tokensService;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpPost("/api/login")]
        [ProducesResponseType(typeof(IActionResult), (int)StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(IActionResult), (int)StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> AuthenticateAsync([FromBody] LoginUserModel login)
        {
            var serviceRequest = _mapper.Map<TokenRequest>(login);
            var response = await _tokenService.AuthenticateAsync(serviceRequest);
            return Created(string.Empty, response);
        }
    }
}




