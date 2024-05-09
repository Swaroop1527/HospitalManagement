using HospitalManagement.Core.Common.CommonPropertiesForModel;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HospitalManagement.Core.Common.Models
{
   [JsonObject(MemberSerialization = MemberSerialization.OptIn)]
   [Serializable]
    public class Branch : CommonProperties
    {
        [JsonProperty]
        public Guid Id { get; set; }

        [JsonProperty]
        public Guid HeadOfficeId { get; set; }

        [JsonProperty]
        public string? BranchName { get; set; } = string.Empty;

        [JsonProperty]
        public string? BranchCode { get; set; } = string.Empty;

        [JsonProperty]
        public string? Services { get; set; } = string.Empty;

        [JsonProperty]
        public string? BranchManagerName { get; set; } = string.Empty;

        [JsonProperty]
        public override string? Address { get; set; } = string.Empty;

        [JsonProperty]
        public override long? MobileNumber { get; set; }

        [JsonProperty]
        public override string? Email { get; set; } = string.Empty;

        [JsonProperty]
        public List<Doctor> Doctors { get; set; } = new List<Doctor>();
    }
}
