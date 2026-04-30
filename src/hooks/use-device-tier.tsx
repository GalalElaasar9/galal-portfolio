import { useEffect, useState } from "react";

/**
 * Returns a tier based on rough device capabilities:
 * - "fast": skip skeleton entirely (instant feel)
 * - "normal": short skeleton with subtle shimmer
 * - "slow": longer skeleton with stronger shimmer (smooth feel)
 *
 * Uses navigator.hardwareConcurrency, deviceMemory and connection hints when available.
 */
export type DeviceTier = "fast" | "normal" | "slow";

export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>("normal");

  useEffect(() => {
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };

    const cores = nav.hardwareConcurrency ?? 4;
    const memory = nav.deviceMemory ?? 4;
    const conn = nav.connection;
    const slowNet =
      !!conn && (conn.saveData || ["slow-2g", "2g", "3g"].includes(conn.effectiveType ?? ""));

    if (slowNet || cores <= 2 || memory <= 2) {
      setTier("slow");
    } else if (cores >= 8 && memory >= 8) {
      setTier("fast");
    } else {
      setTier("normal");
    }
  }, []);

  return tier;
}
