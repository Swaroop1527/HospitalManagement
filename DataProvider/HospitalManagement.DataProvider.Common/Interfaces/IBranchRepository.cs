﻿using HospitalManagement.Core.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace HospitalManagement.DataProvider.Common.Interfaces
{
    public interface IBranchRepository
    {
        bool AddBranch(Branch branch);

        Branch GetBranch(Guid branchId);

        bool UpdateBranch(Branch branch);

        bool DeleteBranch(Guid branchId);
        List<Branch> GetAllBranches();

       

        List<Branch> GetSearchBranchName(string branchName);

        List<Branch> GetBranchCode(string branchCode);
       
    }
}
