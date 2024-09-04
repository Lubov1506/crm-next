'use client';
import { Button } from '../../conponents/button';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}
export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Something went wrong ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
