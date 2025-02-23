import { verifyUser } from "@/lib/clerk/verify-user";
import { translateTo } from "@/lib/google-translate/translate-to";
import { removeNull } from "@/lib/utils/remove-null";

export async function POST(req: Request) {
  const { text, targetLang } = await req.json();

  await verifyUser();

  const translatedText = await translateTo(
    removeNull({
      text,
      targetLang,
    })
  );
  return Response.json({
    text: translatedText?.replaceAll(/&quot;/g, '"')?.replaceAll(/&#39;/g, "'"),
  });
}
