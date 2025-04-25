// routes/index.tsx
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { GREETINGS } from "~/utils/greetings";

export function loader({ request: _ }: LoaderFunctionArgs) {
  const currentHour = new Date().getHours();

  const greeting =
    GREETINGS.find(({ start, end }) =>
      start < end
        ? currentHour >= start && currentHour <= end
        : currentHour >= start || currentHour <= end
    ) ?? null;

  return json({ greeting });
}

export default function Index() {
  const { greeting } = useLoaderData<typeof loader>();
  const { t } = useTranslation("common");

  return (
    <div>
      <div>
        <h1>{t("welcome")}</h1>
        <p>{t("about")}</p>
      </div>

      <button onClick={() => changeLanguage("my")}>🇲🇾 Malay</button>
      <button onClick={() => changeLanguage("en")}>🇺🇸 English</button>

      {greeting && (
        <div className="flex flex-col">
          <div className="flex items-center">
            <p className="text-base-content text-sm">Hello,</p>
          </div>
          <p className="text-3xl font-bold">{greeting.message}</p>
        </div>
      )}
      <div>Test</div>
    </div>
  );
}
