/**
 * DECENTVOTE | Voting dApp made by ZiLab Technologies
 *
 * www.zilab.co
 * Telegram: @zilab_technologies
 */
import { cn } from "@/lib/utils";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("text-secondary-foreground", className)}>
      <div className="px-4 lg:px-12">
        <div className="flex flex-wrap justify-between gap-6 py-4">
          <p>Copyright @ 2023 Voting Dapp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
