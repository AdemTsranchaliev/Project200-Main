using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project413.Data;
using Project413.Data.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project413.API.Controllers
{
    public class StudioController : Controller
    {
        [HttpPost]
        [Route("addStudio")]
        public IActionResult AddStudio([FromBody]Studio studio)
        {

            var stu = new Studio
            {
                Address = "12",
                Description = "22",
                ImageSources = "32",
                Name = "42",
                Phones = "52",
                Reviews = new List<Review>(),
                WorkingTime = "62",     
            };

            var service = new Service
            {
                Name = "s",
                Description = "d",
                Duration = "123123",
                Price = 123
            };
            var category = new Category
            {
                Name = ""
            };

            stu.Services.Add(service);

            var temp = new ApplicationDbContext(new Microsoft.EntityFrameworkCore.DbContextOptions<ApplicationDbContext>());

            temp.Add<Studio>(stu);

            temp.SaveChanges();

            return Ok();
        }
    }
}

