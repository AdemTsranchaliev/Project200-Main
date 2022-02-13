namespace Project413.Data.Models
{
    public class ServiceCategory
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public ICollection<Service> Services { get; set; }
    }
}
