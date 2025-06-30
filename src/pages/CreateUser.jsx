
import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import RoleCreationForms from '../components/RoleCreationForms';

const CreateUser = ({ userRole = 'super-admin' }) => {
  const { type } = useParams();
  
  const getFormType = () => {
    switch (type) {
      case 'admin': return 'create-admin';
      case 'leader': return 'create-leader';
      case 'employee': return 'create-employee';
      default: return 'create-employee';
    }
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="max-w-4xl mx-auto">
        <RoleCreationForms 
          userRole={userRole} 
          formType={getFormType()}
        />
      </div>
    </DashboardLayout>
  );
};

export default CreateUser;
