const Wallet = () => {
  return (
    <div className="transition-all duration-500 mt-10 md:mt-0 py-4 px-6 bg-white dark:bg-black min-h-screen w-full mt-10 md:mt-0 md:p-8 mb-16 md:mb-0">
      <p className="font-semibold text-3xl text-center md:text-left dark:text-white">
        Wallet
      </p>
      <div className="mt-10 flex justify-between flex-col md:flex-row">
        <div className="bg-black md:w-1/2 md:mr-3 p-2 md:p-8 py-9 rounded-xl flex flex-row justify-between dark:bg-slate-800">
          <div className="">
            <p className="text-white font-light text-xl mb-5 dark:text-white">
              Cash balance
            </p>
            <p className="text-white font-semibold text-4xl dark:text-white">
              AED 0
            </p>
          </div>
          <div>
            <button className="transition-all duration-200 border border-white w-36 py-2 opacity-60 text-white font-semibold rounded-xl cursor-not-allowed hover:bg-white hover:text-black dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:text-white">
              Deposit
            </button>
            <br />
            <br />
            <button className="transition-all duration-200 border border-white w-36 py-2 opacity-60 text-white font-semibold rounded-xl cursor-not-allowed hover:bg-white hover:text-black dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:text-white">
              Withdraw
            </button>
          </div>
        </div>
        <div className="bg-black mt-5 md:mt-0 md:w-1/2 md:ml-3 p-2 md:p-8 py-12 md:py-9 rounded-xl flex justify-between dark:bg-slate-800">
          <div>
            <p className="text-white font-light text-xl mb-5 dark:text-white">
              Rewards balance
            </p>
            <p className="text-white font-semibold text-4xl dark:text-white">
              AED 0
            </p>
          </div>
          <div className="dark:text-white">
            <i className="fa fa-regular fa-star fa-4x my-auto mx-auto" />
          </div>
        </div>
      </div>
      <p className="text-xl mt-8 font-semibold dark:text-white">Transactions</p>
      <div className="bg-black w-full mt-4 px-12 rounded-xl overflow-hidden dark:bg-slate-800">
        <div className="flex py-4">
          <span className="mr-20 text-white">Type</span>
          <span className="mx-20 text-white">Status</span>
          <span className="mx-20 text-white">Date</span>
          <span className="mx-20 text-white">Wallet</span>
          <span className="mx-20 text-white">Amount</span>
        </div>
        <hr />
        <div className="py-12 text-center mx-auto my-auto font-display text-white">
          <i class="fa-regular fa-2x fa-clock"></i>
          <br />
          <br />
          No transactions yet
        </div>
      </div>
      <div className="flex mt-4 justify-between flex-col md:flex-row">
        <div className="md:w-1/2 rounded-xl md:mr-4">
          <p className="text-xl mt-8 font-semibold mb-3 dark:text-white">
            Cards
          </p>
          <div className="rounded-xl bg-black px-4 py-9 md:p-8 dark:bg-slate-800">
            <div className="flex mb-4">
              <div className="bg-slate-100 w-fit rounded p-2 my-auto">
                <i className="fa fa-solid fa-credit-card fa-xl m-auto" />
              </div>
              <span className="ml-2 text-sm text-white my-auto tracking-wide dark:text-white">
                Add a card to enjoy instant deposits from anywhere in the world
              </span>
            </div>
            <button className="transition-all duration-200 border border-white w-full py-2 opacity-60 text-white font-semibold rounded-xl cursor-not-allowed hover:bg-white hover:text-black dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:text-white">
              <i className="fa-solid fa-plus mr-3" /> Add new card
            </button>
          </div>
        </div>
        <div className="md:w-1/2 rounded-xl md:ml-4">
          <p className="text-xl mt-8 font-semibold mb-3 dark:text-white">
            Banks
          </p>
          <div className="rounded-xl bg-black px-4 py-9 md:p-8 dark:bg-slate-800">
            <div className="flex mb-4">
              <div className="bg-slate-100 w-fit rounded p-2 my-auto">
                <i className="fa fa-solid fa-building-columns fa-xl m-auto" />
              </div>
              <span className="ml-2 text-sm text-white my-auto tracking-wide dark:text-white">
                Add a bank account to deposit from anywhere in the world
              </span>
            </div>
            <button className="transition-all duration-200 border border-white w-full py-2 opacity-60 text-white font-semibold rounded-xl cursor-not-allowed hover:bg-white hover:text-black dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:text-white">
              <i className="fa-solid fa-plus mr-3" /> Add new bank
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
