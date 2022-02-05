namespace Project413.Data.Models
{
    public class StudioUser
    {
        public ApplicationUser ApplicationUser { get; set; }
        public Guid ApplicationUserId { get; set; }

        public Studio Studio { get; set; }
        public Guid StudioId { get; set; }

        public string Role { get; set; }
    }
}
