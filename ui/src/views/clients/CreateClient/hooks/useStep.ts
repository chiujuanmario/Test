import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface Helpers {
  handleNext: () => void;
  handlePrevious: () => void;
  reset: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

type setStepCallbackType = (step: number | ((step: number) => number)) => void;

export function useStep(maxStep: number): [number, Helpers] {
  const [currentStep, setCurrentStep] = useState(0);

  const isLastStep = useMemo(
    () => currentStep === maxStep - 1,
    [currentStep, maxStep]
  );

  const isFirstStep = useMemo(() => currentStep === 0, [currentStep]);

  const setActiveStep = useCallback<setStepCallbackType>(
    (step) => {
      // Allow value to be a function so we have the same API as useState
      const newStep = step instanceof Function ? step(currentStep) : step;

      if (newStep >= 0 && newStep < maxStep) {
        setCurrentStep(newStep);
        return;
      }

      throw new Error('Step not valid');
    },
    [maxStep, currentStep]
  );

  const handleNext = useCallback(() => {
    if (!isLastStep) {
      setCurrentStep((step) => step + 1);
    }
  }, [isLastStep]);

  const handlePrevious = useCallback(() => {
    if (!isFirstStep) {
      setCurrentStep((step) => step - 1);
    }
  }, [isFirstStep]);

  const reset = useCallback(() => {
    setCurrentStep(0);
  }, []);

  return [
    currentStep,
    {
      handleNext,
      handlePrevious,
      isLastStep,
      isFirstStep,
      setActiveStep,
      reset,
    },
  ];
}
