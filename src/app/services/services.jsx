'use client'
import Reveal from '@/components/animation/reveal';
import React from 'react'

const sapModules = [
  {
    module: 'MM (Materials Management)',
    description: 'SAP MM deals with material management, including procurement, inventory management, and invoice verification. It ensures the availability of materials required for production or services.'
  },
  {
    module: 'PLM (Product Lifecycle Management)',
    description: 'SAP PLM manages the entire lifecycle of a product from inception, through design and manufacturing, to service and disposal. It integrates people, processes, business systems, and information.'
  },
  {
    module: 'SD (Sales and Distribution)',
    description: 'SAP SD manages sales orders, deliveries, pricing, billing, and credit management processes. It helps businesses streamline their sales and distribution operations.'
  },
  {
    module: 'QM (Quality Management)',
    description: 'SAP QM ensures product quality by implementing quality planning, quality inspection, and quality control processes throughout the supply chain.'
  },
  {
    module: 'FI (Financial Accounting)',
    description: 'SAP FI handles financial transactions, financial reporting, and financial planning. It provides comprehensive solutions for accounting and financial management.'
  },
  {
    module: 'HCM (Human Capital Management)',
    description: 'SAP HCM manages human resources processes such as payroll, personnel administration, talent management, and workforce planning.'
  }
];

const sapPrograms = [
  {
    program: 'SAP GRC-AC (Access Control)',
    description: 'SAP GRC-AC helps organizations manage access risks by controlling user access to sensitive data and applications.'
  },
  {
    program: 'SAP S/4HANA Finance for Treasury & Risk Management',
    description: 'SAP S/4HANA Finance for Treasury & Risk Management provides tools for managing treasury operations and mitigating financial risks.'
  },
  {
    program: 'SAP S/4HANA Finance for Cash Management',
    description: 'SAP S/4HANA Finance for Cash Management optimizes cash flow by forecasting, monitoring, and managing cash positions.'
  },
  {
    program: 'SAP S/4HANA Finance for Receivables Management',
    description: 'SAP S/4HANA Finance for Receivables Management automates and streamlines the accounts receivable process, improving cash flow and reducing DSO (Days Sales Outstanding).'
  },
  {
    program: 'SAP Single Sign-on',
    description: 'SAP Single Sign-on enables users to access multiple SAP and non-SAP applications with a single set of credentials, enhancing security and user experience.'
  },
  {
    program: 'SAP Process Orchestration/PI',
    description: 'SAP Process Orchestration/PI integrates disparate systems and applications within an organization, enabling seamless communication and process automation.'
  },
  {
    program: 'SAP Solution Manager',
    description: 'SAP Solution Manager provides tools for managing and monitoring SAP systems, implementing best practices, and supporting business processes.'
  },
  {
    program: 'CHARM (Change Request Management)',
    description: 'SAP CHARM streamlines the change management process by providing tools for planning, documenting, approving, and implementing changes to SAP systems.'
  },
  {
    program: 'BPM (Business Process Management)',
    description: 'SAP BPM enables organizations to model, analyze, optimize, and automate their business processes for improved efficiency and agility.'
  },
  {
    program: 'SAP SuccessFactors',
    description: 'SAP SuccessFactors is a suite of cloud-based human capital management (HCM) software that includes modules for talent management, workforce planning, and employee engagement.'
  },
  {
    program: 'Employee Central',
    description: 'SAP SuccessFactors Employee Central is a core HR system that centralizes employee data, simplifies HR processes, and improves workforce management.'
  },
  {
    program: 'Performance & Goal Management',
    description: 'SAP SuccessFactors Performance & Goal Management module helps organizations set, track, and evaluate employee performance and goals.'
  },
  {
    program: 'Compensation',
    description: 'SAP SuccessFactors Compensation module automates compensation planning, rewards employees based on performance, and ensures fair and equitable pay practices.'
  },
  {
    program: 'SAP ABAP (Advanced Business Application Programming)',
    description: 'SAP ABAP is a programming language used for developing custom applications and enhancements within the SAP environment.'
  },
  {
    program: 'SAP BASIS',
    description: 'SAP BASIS is the system administration platform for SAP applications, providing the runtime environment and tools necessary for system management and monitoring.'
  },
  {
    program: 'SAP Fiori',
    description: 'SAP Fiori is a user experience (UX) design concept and collection of apps that provides a modern and intuitive user interface for SAP applications, accessible across devices.'
  }
];
export default function Services() {
  return (
    <div className='bg-gray'>
      <div className='container mx-auto xl:px-[5%] px-[5%] md:px-0 py-[60px] text-white'>
        <p className='text-center font-[700] font-cabin text-[30px] md:text-[42px] lg:text-[53px] mb-[30px]'>Our Services</p>
        <div>
          <p className='text-center font-[700] font-cabin text-[22px] md:text-[28px] lg:text-[38px] mb-[30px] '>SAP Module Support</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[25px]'>
            {sapModules.map((data, id) => {
              return (
                <div key={id} className='flex flex-col text-center shadow-lg p-[20px] rounded-[10px] border-gray border-[1px] hover:shadow-2xl hover:scale-[1.1] transition-all duration-300 text-gray bg-white'>
                  <Reveal>
                    <p className='font-[700] '>{data.module}</p>
                    <p className='mt-[15px]'>{data.description}</p>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
        <div className='mt-[50px]'>
          <p className='text-center font-[700] font-cabin text-[22px] md:text-[28px] lg:text-[38px] mt-[30px] '>Corporate Training in SAP Modules</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[25px]'>
            {sapPrograms.map((data, id) => {
              return (
                <div key={id} className='flex flex-col text-center shadow-lg p-[20px] rounded-[10px] border-gray border-[1px] hover:shadow-2xl hover:scale-[1.1] transition-all duration-300 text-gray bg-white'>
                  <Reveal>
                    <p className='font-[700] '>{data.program}</p>
                    <p className='mt-[15px]'>{data.description}</p>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
