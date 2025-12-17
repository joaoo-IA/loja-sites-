import { Terminal, Activity, Settings, GitBranch, Check, BarChart3, ToggleRight, Sliders } from "lucide-react";

export function Authority() {
  return (
    <section className="relative py-20 bg-gray-50/50 overflow-hidden border-t border-gray-100">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-gradient" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-mono text-gray-600 tracking-wider">
              SYSTEM_AUTHORITY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4 tracking-tight">
            Por que escolher <span className="text-blue-600">nosso trabalho?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Engenharia de precisão para negócios digitais. Sem promessas vazias, apenas métricas e resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Module 01: Results */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-mono font-medium text-gray-500 uppercase">Module_01: Results</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-600">ONLINE</span>
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-gray-600">
                  <span>Performance Score</span>
                  <span>98/100</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-emerald-500 rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-gray-600">
                  <span>Conversion Rate</span>
                  <span>High</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-blue-500 rounded-full" />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-base font-bold text-gray-900 mb-1">Foco em Resultados</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Design orientado a dados e métricas de conversão reais para o seu negócio.
                </p>
              </div>
            </div>
          </div>

          {/* Module 02: Customization */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-mono font-medium text-gray-500 uppercase">Module_02: Config</span>
              </div>
              <Sliders className="w-4 h-4 text-gray-300" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-xs font-medium text-gray-600">Custom Strategy</span>
                <ToggleRight className="w-6 h-6 text-blue-600" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="w-8 text-right">Dev</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full shadow-sm ml-[80%]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="w-8 text-right">UI</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-purple-500 rounded-full shadow-sm ml-[100%]" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-base font-bold text-gray-900 mb-1">Projetos Sob Medida</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Sem templates. Configuração exclusiva para a identidade da sua marca.
                </p>
              </div>
            </div>
          </div>

          {/* Module 03: Process */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-mono font-medium text-gray-500 uppercase">Module_03: Pipeline</span>
              </div>
              <BarChart3 className="w-4 h-4 text-gray-300" />
            </div>

            <div className="relative pl-2 space-y-4">
              {/* Timeline Line */}
              <div className="absolute left-[11px] top-2 bottom-4 w-px bg-gray-200" />

              <div className="relative flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-900 border-2 border-white shadow-sm z-10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-gray-500 line-through">01. Briefing</span>
              </div>
              <div className="relative flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white border-2 border-purple-600 shadow-sm z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                </div>
                <span className="text-sm font-bold text-gray-900">02. Desenvolvimento</span>
              </div>
              <div className="relative flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-100 border-2 border-white shadow-sm z-10" />
                <span className="text-xs font-medium text-gray-400">03. Entrega</span>
              </div>

              <div className="pt-4 ml-1">
                <h3 className="text-base font-bold text-gray-900 mb-1">Processo Organizado</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Pipeline claro de ponta a ponta. Você acompanha cada commit.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
