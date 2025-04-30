import { useAuth } from "@/components/Providers/AuthProvider/AuthProvider";
import { DependencyList, useEffect } from "react";

interface UseEffectAfterAuthProps {
  fn: () => void;
  dep?: DependencyList[];
}

const useEffectAfterAuth = ({
  fn,
  dep = [],
}: UseEffectAfterAuthProps): void => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, ...dep]);
};

export default useEffectAfterAuth;
