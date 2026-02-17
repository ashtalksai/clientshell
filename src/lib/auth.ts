import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Resend from "next-auth/providers/resend";
import { db } from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Resend({
      from: process.env.EMAIL_FROM || "ClientShell <noreply@ashketing.com>",
    }),
  ],
  pages: {
    signIn: "/login",
    verifyRequest: "/verify",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // Fetch firm data
        const dbUser = await db.user.findUnique({
          where: { id: user.id },
          include: { firm: true },
        });
        if (dbUser?.firm) {
          (session.user as any).firmId = dbUser.firmId;
          (session.user as any).firm = dbUser.firm;
        }
      }
      return session;
    },
  },
});
