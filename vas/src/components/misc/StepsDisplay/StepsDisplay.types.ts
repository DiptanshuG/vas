export type Step = {
  name: string;
  active: boolean;
  completed: boolean;
};

export interface IStepsDisplayProps {
  steps: Step[];
  className?: string;
}
