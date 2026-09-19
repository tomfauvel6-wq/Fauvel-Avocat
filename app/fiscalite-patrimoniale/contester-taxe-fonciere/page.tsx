import type { Metadata } from "next";
import TechnicalPublicationPage from "../../../components/TechnicalPublicationPage";
import { getArticle } from "../../../lib/articles-data";

const article = getArticle("contester-taxe-fonciere");

export const metadata: Metadata = {
  title: article?.title || "Publication",
  description: article?.description || "Publication de Fauvel Avocat.",
  alternates: { canonical: article?.path },
  openGraph: { title: article?.title, description: article?.description, url: article?.path, images: ["/images/og-image.png"], type: "article" }
};

export default function Page() {
  if (!article) return null;
  return <TechnicalPublicationPage article={article} />;
}
