import * as React from "react";
import {Types} from "aptos";
import {Box} from "@mui/material";
import ContentBox from "../../../components/IndividualPageContent/ContentBox";
import ContentRow from "../../../components/IndividualPageContent/ContentRow";
import {getLearnMoreTooltip} from "../helpers";
import {TransactionStatus} from "../../../components/TransactionStatus";
import TransactionBlockRow from "./Components/TransactionBlockRow";
import TimestampValue from "../../../components/IndividualPageContent/ContentValue/TimestampValue";

type ValidatorTabProps = {
  transaction: Types.Transaction;
};

export default function ValidatorTransactionTab({
  transaction,
}: ValidatorTabProps) {
  // FIXME: We need to get off SDK v1
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transactionData = transaction as any;

  return (
    <Box marginBottom={3}>
      <ContentBox padding={4}>
        <ContentRow
          title={"Version:"}
          value={<Box sx={{fontWeight: 600}}>{transactionData.version}</Box>}
          tooltip={getLearnMoreTooltip("version")}
        />
        <ContentRow
          title="Status:"
          value={<TransactionStatus success={transactionData.success} />}
          tooltip={getLearnMoreTooltip("status")}
        />
        <ContentRow
          title="Validator Transaction Type:"
          value={transactionData.validator_transaction_type}
          tooltip={getLearnMoreTooltip("proposer")}
        />
      </ContentBox>
      <ContentBox>
        <TransactionBlockRow version={transactionData.version} />
        <ContentRow
          title="Timestamp:"
          value={
            <TimestampValue
              timestamp={transactionData.timestamp}
              ensureMilliSeconds
            />
          }
          tooltip={getLearnMoreTooltip("timestamp")}
        />
        <ContentRow
          title="VM Status:"
          value={transactionData.vm_status}
          tooltip={getLearnMoreTooltip("vm_status")}
        />
      </ContentBox>
      <ContentBox>
        <ContentRow
          title="State Change Hash:"
          value={transactionData.state_change_hash}
          tooltip={getLearnMoreTooltip("state_change_hash")}
        />
        <ContentRow
          title="Event Root Hash:"
          value={transactionData.event_root_hash}
          tooltip={getLearnMoreTooltip("event_root_hash")}
        />
        <ContentRow
          title="Accumulator Root Hash:"
          value={transactionData.accumulator_root_hash}
          tooltip={getLearnMoreTooltip("accumulator_root_hash")}
        />
      </ContentBox>
    </Box>
  );
}
