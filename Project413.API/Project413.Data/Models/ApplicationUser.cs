using Microsoft.AspNetCore.Identity;

namespace Project413.Data.Models
{
    public class ApplicationUser : IdentityUser<Guid>
    {
        public ICollection<StudioUser> StudioUser { get; set; }
    }
}
