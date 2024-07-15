import Logo2 from '../assets/logo_2.png'


export const PreFooter = () => {
  return (
    <div className="max-w-1248 mx-auto w-full h-full my-96 flex justify-between">
      <div className="w-229 h-27">
        <img
          src={Logo2}
          alt="header_logo"
          className='w-full h-full'
        />
      </div>
      <div className='w-497 flex justify-between gap-120'>
        <div className='w-54'>
          <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Home</p>
          <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Problem</p>
          <p className='text-withe font-medium text-sm leading-10 -tracking-0.7'>Solution</p>
        </div>
        <div className='w-79'>
          <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Features</p>
          <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Pricing</p>
          <p className='text-withe font-medium text-sm leading-10 -tracking-0.7'>Get in touch</p>
        </div>
        <div className='w-124'>
          <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Privacy Policy</p>
          <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Terms & Conditions</p>
          <p className='text-withe font-medium text-sm leading-10 -tracking-0.7'>Refund Policy</p>
        </div>
      </div>
    </div>
  )
}

