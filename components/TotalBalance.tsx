
import AnimatedCounter from "./AnimatedCounter";
import DoughnotChart from "./DoughnotChart";

const TotalBalance = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return <section className="total-balance">
    <div className="total-balance-chart">
        <DoughnotChart accounts={accounts} />
    </div>
    <div className="flex flex-col gap-6">

        <h2 className="header-2">
        Banks Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
            <p className="total-balance-lable">
                Total Current Balance
            </p>
            <div className="total-balance-amount flex-center gap-2">
              <AnimatedCounter amount={totalCurrentBalance}  />
            </div>
        </div>

    </div>
  </section>;
};

export default TotalBalance;
