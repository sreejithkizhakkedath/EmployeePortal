using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeePortal.Models
{
    public partial class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal? Salary { get; set; }
        public string Designation { get; set; }
        public string Location { get; set; }
    }
}
