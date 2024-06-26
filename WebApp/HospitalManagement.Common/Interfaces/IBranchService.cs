﻿using HospitalManagement.Core.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HospitalManagement.Common.Interfaces
{
    public interface IBranchService
    {
        APIResult<bool> AddBranch(Branch branch);

        APIResult<Branch> GetBranch(Guid branchId); 
    
        APIResult<bool> UpdateBranch(Branch branch);

        APIResult<bool> DeleteBranch(Guid branchId);

        APIResult<List<Branch>> GetAllBranches();

        APIResult<List<Branch>> GetSearchBranchName(string branchName);

        APIResult<List<Branch>> GetBranchCode(string branchCode);
        

    }
}
