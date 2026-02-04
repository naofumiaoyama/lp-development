"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Zap,
  Brain,
  Code,
  Database,
  ArrowRight,
  Check,
  Clock,
  Sparkles,
  Target,
  Rocket,
  Shield,
  MessageSquare,
  Send,
  Loader2,
  Layout,
  Smartphone,
  Server,
  Bot,
} from "lucide-react";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    category: [] as string[],
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { id: "web", label: "新規Webサービス開発 (React/Next.js)" },
    { id: "ai", label: "生成AI導入・RAG構築 (Python)" },
    { id: "enterprise", label: "業務システム開発・改修 (C#, etc.)" },
    { id: "consulting", label: "DXコンサルティング・その他" },
  ];

  const budgetOptions = [
    "〜100万円",
    "100万円〜300万円",
    "300万円〜500万円",
    "500万円〜1000万円",
    "1000万円以上",
    "未定・要相談",
  ];

  const handleCategoryChange = (categoryId: string) => {
    setFormData((prev) => ({
      ...prev,
      category: prev.category.includes(categoryId)
        ? prev.category.filter((id) => id !== categoryId)
        : [...prev.category, categoryId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const techStacks = [
    {
      icon: Code,
      category: "フロントエンド開発",
      description: "React / Next.js でモダンなWebアプリケーションを構築",
      items: ["Next.js / React", "TypeScript", "Tailwind CSS", "Vercel / AWS"],
    },
    {
      icon: Brain,
      category: "生成AI・DXソリューション",
      description: "Python で業務効率化とAI活用を実現",
      items: ["RAG構築", "AIエージェント", "LangChain", "業務自動化"],
    },
    {
      icon: Database,
      category: "エンタープライズシステム",
      description: "C# / .NET で堅牢な基幹システムを開発",
      items: ["C# / .NET Core", "Azure", "レガシー移行", "API開発"],
    },
  ];

  const plans = [
    {
      icon: Rocket,
      name: "MVP開発パッケージ",
      description: "最短2週間〜1ヶ月で動くプロトタイプを構築",
      target: "市場検証を急ぎたいスタートアップ向け",
      features: [
        "生成AIを活用した高速プロトタイピング",
        "最小限の機能で市場検証可能なMVP",
        "ユーザーフィードバックに基づく迅速な改善",
      ],
    },
    {
      icon: Target,
      name: "月額制アジャイル開発",
      description: "開発チームを月額固定で提供",
      target: "継続的な開発が必要なプロダクト向け",
      features: [
        "AI活用により通常3人分相当のタスクを消化",
        "スプリント単位での成果物デリバリー",
        "柔軟な優先順位変更に対応",
      ],
      recommended: true,
    },
    {
      icon: Shield,
      name: "スコープ定義型プロジェクト",
      description: "明確なゴールに対して完成責任を持って納品",
      target: "要件が固まっているプロジェクト向け",
      features: [
        "AIによる工数削減分を価格に還元",
        "相場より高品質なものを適正価格で",
        "明確なマイルストーンと納品スケジュール",
      ],
    },
  ];

  const systemTypes = [
    {
      icon: Layout,
      title: "Webアプリケーション",
      description: "SaaS、業務システム、管理画面など",
      languages: ["TypeScript", "Python", "C#"],
    },
    {
      icon: Smartphone,
      title: "モバイル対応システム",
      description: "PWA、レスポンシブWebアプリ",
      languages: ["React", "Next.js", "TypeScript"],
    },
    {
      icon: Server,
      title: "API・バックエンド",
      description: "RESTful API、GraphQL、マイクロサービス",
      languages: ["Node.js", "Python", "C#"],
    },
    {
      icon: Bot,
      title: "AI・自動化システム",
      description: "RAG、チャットボット、業務自動化",
      languages: ["Python", "TypeScript"],
    },
  ];

  const languages = [
    {
      name: "TypeScript / JavaScript",
      level: "主要言語",
      use: "フロントエンド・フルスタック開発",
      frameworks: ["Next.js", "React", "Node.js", "Express", "tRPC"],
    },
    {
      name: "Python",
      level: "主要言語",
      use: "AI・自動化・バックエンド",
      frameworks: ["FastAPI", "LangChain", "Django", "Pandas"],
    },
    {
      name: "C# / .NET",
      level: "主要言語",
      use: "エンタープライズ・業務システム",
      frameworks: [".NET Core", "ASP.NET", "Azure Functions", "Entity Framework"],
    },
  ];

  const useCases = [
    {
      title: "社内ナレッジのAI化",
      tag: "RAG",
      problem: "マニュアルが散在して探せない",
      solution: "社内WikiとPDFを読み込ませたRAGシステムを構築",
      result: "回答時間を90%削減",
    },
    {
      title: "業務システムの刷新",
      tag: "C#",
      problem: "古いC#のシステムをWeb化したい",
      solution: "ロジックを活かしつつAzure上へ移行",
      result: "モダンなWebアプリへ変身",
    },
  ];

  const faqs = [
    {
      question: "Claude Codeとは何ですか？",
      answer:
        "Claude CodeはAnthropic社が提供する最新のAI開発アシスタントです。コード生成、リファクタリング、バグ修正、テスト作成など、開発の多くの工程を高精度にサポートします。私たちはClaude Codeを開発プロセスに統合することで、従来の3〜5倍の開発速度を実現しながら、品質を維持しています。",
    },
    {
      question: "AIによる開発でも品質は保証されますか？",
      answer:
        "はい。Claude Codeは高品質なコードを生成しますが、私たちは必ず人間のエンジニアがレビュー・検証を行います。AIは開発速度を向上させるツールであり、最終的な品質管理は経験豊富なエンジニアが責任を持って行います。テストコードの自動生成やコードレビューにもAIを活用し、より高品質な成果物を提供しています。",
    },
    {
      question: "人月見積もりではないとのことですが、どのように価格が決まりますか？",
      answer:
        "プロジェクトの規模、複雑さ、期間に基づいて見積もりを行います。MVP開発パッケージは機能単位、月額制は固定価格、スコープ定義型は成果物単位での価格設定となります。AIを活用することで従来より工数を削減できるため、その分を価格に還元しています。",
    },
    {
      question: "どのような規模のプロジェクトに対応していますか？",
      answer:
        "スタートアップのMVP開発から、中小企業の業務システム構築、大企業のDXプロジェクトまで幅広く対応しています。プロジェクトの規模に関わらず、まずはご相談ください。",
    },
    {
      question: "開発期間はどのくらいですか？",
      answer:
        "プロジェクトの規模によりますが、MVPは最短2週間〜1ヶ月、中規模システムは2〜3ヶ月、大規模プロジェクトは半年以上を想定しています。Claude Codeを活用することで、従来の半分程度の期間で開発できるケースも多いです。",
    },
    {
      question: "どのプログラミング言語に対応していますか？",
      answer:
        "TypeScript/JavaScript、Python、C#/.NETの3つを主要言語としています。Claude Codeを活用することで、これらの言語でのモダンな開発が可能です。プロジェクトの要件に最適な技術スタックを選択できます。詳しくは「対応プログラミング言語」セクションをご覧ください。",
    },
    {
      question: "保守・運用もお願いできますか？",
      answer:
        "はい、開発後の保守・運用サポートも提供しています。月額制のプランでは継続的な改善も含まれています。また、既存システムの改修や機能追加にも柔軟に対応します。",
    },
    {
      question: "リモートでの開発は可能ですか？",
      answer:
        "はい、フルリモートでの開発が可能です。オンラインミーティングツールやチャットツールを活用し、密なコミュニケーションを取りながらプロジェクトを進めます。必要に応じて対面でのミーティングも可能です。",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">PrimaMateria</span>
          </div>
          <Button size="sm" asChild>
            <a href="#contact">お問い合わせ</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center slide-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Native Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">価値創出を、工数ではなく</span>
              <br />
              <span className="gradient-text">
                成果で測る開発へ。
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Next.js × Python × Generative AI で実現する、次世代のシステム開発。
              <br className="hidden md:block" />
              生成AIを開発プロセスに統合し、高品質な成果物を最適な期間で提供します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">
                  今すぐ開発の相談をする
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">サービスを見る</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              開発プロセスを再定義する
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              従来の開発手法との違いを明確にし、新しい価値を提供します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional */}
            <Card className="bg-muted/20 border-muted/50">
              <CardHeader>
                <CardTitle className="text-xl text-muted-foreground flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  従来の開発 (Old)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    多重下請け構造と形骸化した人月単価
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    要件定義に数ヶ月、開発に半年。変化への対応が困難
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    レガシーな技術スタックによる保守性の低下
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Our Approach */}
            <Card className="bg-primary/5 border-primary/30 glow">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-primary" />
                  私たちのアプローチ (New)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-foreground font-medium">
                      AI-Native Development
                    </p>
                    <p className="text-muted-foreground text-sm">
                      生成AIをフル活用し、工数を劇的に圧縮
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-foreground font-medium">Outcome Based</p>
                    <p className="text-muted-foreground text-sm">
                      「どんな価値を生むか」にフォーカス
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-foreground font-medium">
                      Agile & Modern
                    </p>
                    <p className="text-muted-foreground text-sm">
                      修正・拡張に強いモダンな基盤を提供
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              技術スタック・サービス領域
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              フロントエンドからAIソリューション、エンタープライズシステムまで
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techStacks.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl w-fit mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{stack.category}</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {stack.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">提供モデル</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              私たちは「人」を売るのではなく、「技術」と「解決策」を提供します
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={index}
                  className={`relative bg-card border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 ${
                    plan.recommended ? "border-primary glow" : ""
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                        おすすめ
                      </span>
                    </div>
                  )}
                  <CardHeader className="pt-8">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl w-fit mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-sm text-primary font-medium">
                        {plan.target}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Types Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              対応可能なシステム
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              幅広いジャンルのシステム開発に対応しています
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {systemTypes.map((system, index) => {
              const Icon = system.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{system.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {system.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {system.languages.map((lang, langIndex) => (
                        <span
                          key={langIndex}
                          className="px-2 py-0.5 text-xs rounded bg-secondary/50 text-secondary-foreground"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              対応プログラミング言語
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Claude Codeを活用し、多様な言語・フレームワークでの開発が可能です
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {languages.map((lang, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{lang.name}</CardTitle>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        lang.level === "主要言語"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/50 text-secondary-foreground"
                      }`}
                    >
                      {lang.level}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{lang.use}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">
                      主なフレームワーク・ライブラリ:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {lang.frameworks.map((fw, fwIndex) => (
                        <span
                          key={fwIndex}
                          className="px-2 py-1 text-xs rounded bg-secondary/30 text-foreground"
                        >
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block bg-primary/5 border-primary/20">
              <CardContent className="pt-6 px-8">
                <div className="flex items-center space-x-3">
                  <Bot className="h-6 w-6 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">
                      Claude Code による開発
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Anthropic社の最新AIアシスタントを活用し、高品質なコードを効率的に生成
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ユースケース</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              実際の課題と解決事例
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/30 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    <span className="px-2 py-1 text-xs font-bold rounded bg-accent/20 text-accent">
                      {useCase.tag}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <p className="text-sm">
                      <span className="font-semibold text-red-400">課題: </span>
                      <span className="text-muted-foreground">
                        {useCase.problem}
                      </span>
                    </p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm">
                      <span className="font-semibold text-primary">解決: </span>
                      <span className="text-muted-foreground">
                        {useCase.solution}
                      </span>
                    </p>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-sm">
                      <span className="font-semibold text-green-400">結果: </span>
                      <span className="text-muted-foreground">
                        {useCase.result}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              よくある質問
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              お問い合わせ
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              プロジェクトの規模や予算に関わらず、まずはお話をお聞かせください
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <Card className="bg-primary/5 border-primary/30 glow">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    お問い合わせありがとうございます
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    内容を確認の上、2営業日以内にご連絡いたします。
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        category: [],
                        budget: "",
                        message: "",
                      });
                    }}
                  >
                    新しいお問い合わせ
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                    開発のご相談
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          お名前 <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="山田 太郎"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          メールアドレス <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="example@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">会社名</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="株式会社〇〇"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">電話番号</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="03-1234-5678"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>
                        ご相談カテゴリ <span className="text-red-500">*</span>
                      </Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {categories.map((category) => (
                          <label
                            key={category.id}
                            className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                              formData.category.includes(category.id)
                                ? "bg-primary/10 border-primary"
                                : "bg-secondary/30 border-border hover:border-primary/50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={formData.category.includes(category.id)}
                              onChange={() => handleCategoryChange(category.id)}
                            />
                            <div
                              className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-colors ${
                                formData.category.includes(category.id)
                                  ? "bg-primary border-primary"
                                  : "border-muted-foreground"
                              }`}
                            >
                              {formData.category.includes(category.id) && (
                                <Check className="h-3 w-3 text-primary-foreground" />
                              )}
                            </div>
                            <span className="text-sm">{category.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">ご予算感</Label>
                      <select
                        id="budget"
                        className="flex h-11 w-full rounded-lg border border-border bg-input px-4 py-2 text-base text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                      >
                        <option value="">選択してください</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        現状の課題・ご要望{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="現在抱えている課題や、実現したいことをご記入ください"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={
                        isSubmitting || formData.category.length === 0
                      }
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          送信中...
                        </>
                      ) : (
                        <>
                          送信する
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">PrimaMateria</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PrimaMateria Inc. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://primamateria.co.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                コーポレートサイト
              </a>
              <a
                href="https://primamateria.co.jp/company"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                会社概要
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
