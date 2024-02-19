import React,{useState} from 'react'
import { FaEthereum, FaBitcoin, FaDollarSign } from 'react-icons/fa';


function Homepage() {
    const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className='flex flex-col my-5 max-h-[39rem] items-center max-w-96 justify-center bg-white rounded-xl'>

      <div className='flex gap-[13rem] sm:gap-[16rem] mt-4'>
        <div className='flex'>
        <img src='nitro.png' alt='nitrope' className='w-5 h-5 mt-[0.2rem]'  />
        <h2 className='text-[#FFAC33] font-semibold'>
          NitroPe
        </h2>
        </div>
        
        <div className='bg-[#94D793] w-2 h-2 mt-2 rounded-full'></div>
      </div>
      <div className="w-[100%] opacity-80 bg-black border-b mt-4 rounded-xl"></div>      
      <form  className="flex flex-col justify-center items-start pt-5 px-7 pb-4 font-semibold">
        <div className="flex w-[100%] text-black flex-auto justify-between ">

        <div className='flex flex-col items-start'>
          <label className=" opacity-70 text-xs">Select Asset</label>
            <select className="w-[100%] mt-2 px-3 hover:cursor-pointer rounded-lg border-[0.1px] border-[#dddddd] py-7 outline-none opacity-90 text-black" name="crypto" id="crypto">
              
              <option value="eth">Ethereum</option>
              <option value="btc">Bitcoin</option>
              <option value="usdt">USDT</option>
              <option value="usdc">USDC</option>
            </select>
          </div>   
          
          <div className='flex flex-col items-start max-w-[50%] '>
          <label className='opacity-70 text-xs'>Amount</label>
          <input className="p-1 my-1  rounded-lg border-[0.1px] border-[#dddddd] text-center outline-none w-[100%] resize text-black" type="text"  placeholder="1212.20"  />
          <input className="p-1 my-1  rounded-lg border-[0.1px] w-[100%] border-[#dddddd] text-center outline-none text-black" type="text"  placeholder="0.898"  />
          <div className='opacity-50 text-xs'>Amount cannot be edited</div>
          </div>
          
        </div>
       
        <div className='flex flex-col mt-3 gap-2 items-start w-[100%]'>
          <label className='opacity-70 text-xs'>Select Chain</label>
          <select className="w-[100%] mt-2 px-1 opacity-90 hover:cursor-pointer rounded-xl border-[0.1px] border-[#dddddd] py-5 outline-none text-black" name="crypto" id="crypto">
            <option value="eth">
              <FaEthereum className="inline-block mr-2" />
              Ethereum
            </option>
            <option value="btc">
              <FaBitcoin className="inline-block mr-2" />
              Bitcoin
            </option>
            <option value="usdt">
              <FaDollarSign className="inline-block mr-2" />
              USDT
            </option>
          </select>

        </div>

        <div className='flex gap-24 sm:gap-[8rem] mt-5'>
          <div className='flex flex-col items-start'>
            <label className='opacity-70 text-xs'>Estimated Fees</label>
            <h2 className='opacity-90'>0.005 ETH</h2>
          </div>
          <div className='flex flex-col items-end'>
            <label className='opacity-70 text-xs'>Estimated Time</label>
            <h2 className='opacity-90'>&lt; 72 sec</h2>
          </div>
        </div>
        <div className="w-[100%]  bg-black border-b opacity-80 mt-5 rounded-xl"></div>

        <div className='flex flex-col my-3 items-start '>
          <label className='opacity-70 text-xs'>Transaction Details</label>
          <label className='opacity-70 text-xs mt-2'>Paying to...</label>
          <h2 className='text-lg opacity-90'>0xfkjghidjlkg..jkdfhgifdhiog</h2>
        </div>
        { 
       <button type="submit" className= {`bg-[#0092E4] font-medium text-lg rounded-xl text-m px-5 py-5 text-center text-white hover:text-black me-2 mb-2 w-[100%] mt-6`}
       disabled={isDisabled} >Connect Wallet</button>
        }
      </form>
    </div>
  )
}

export default Homepage