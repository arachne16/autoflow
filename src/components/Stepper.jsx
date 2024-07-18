

const steps = ['signup', 'pricing', 'payment', 'activation'];

export const Stepper = ({
  completedSteps = ['signup'],
}) => {

  return (
    <div className='flex w-full h-auto gap-2'>
      {
        steps.map((step, index) => {
          const completed = completedSteps.includes(step);
          return (
            <div
              key={index.toString()}
              className={`${completed ? 'text-green-200' : 'text-[#D9D9D9]'} w-[86px] cursor-pointer`}
            >
              <p className='capitalize '>{step}</p>
              <div className={`w-[86px] h-[3px] ${completed ? 'bg-green-200' : 'bg-[#D9D9D9]'} rounded-[5px]`}></div>
            </div>
          )
        })
      }

    </div>
  )
}

