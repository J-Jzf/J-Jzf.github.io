// 中英文切换
        let currentLanguage = 'en';
        const originalTextNodes = [];

        const zhTranslations = {
            "Junfeng ZHU": "朱俊枫",
            ",": "、",
            ";": "；",
            ":": "：",
            ".": "。",
            "&": "与",
            ": 632;": "：632；",
            ": 581;": "：581；",
            "Master's Student in Computer Science and Technology": "计算机科学与技术硕士研究生",
            "Shanghai University": "上海大学",
            "Click to Enter": "点击进入",
            "Homepage": "主页",
            "Timeline": "经历",
            "Publications": "论文",
            "Projects": "项目",
            "Awards": "荣誉",
            "News": "动态",
            "Else": "其他",
            "🪪Self-Intro": "🪪个人简介",
            "Hi there! My name is Junfeng Zhu (朱俊枫).": "你好！我是朱俊枫。",
            "I am currently a Master's student pursuing an academic degree in Computer Science and Technology at the School of Computer Engineering and Science (CES), Shanghai University (SHU), holding a Bachelor's degree in Artificial Intelligence from SHU.": "目前，我是上海大学计算机工程与科学学院-计算机科学与技术专业的学术型硕士研究生，本科毕业于上海大学人工智能专业。",
            "My interests lie in": "我的研究兴趣包括",
            "Computer Vision": "计算机视觉",
            "Agent Application": "智能体应用",
            "Multimodal Large Language Model": "多模态大语言模型",
            ", and": "，以及",
            "Data Analysis": "数据分析",
            ", under the supervision of Professor": "。导师是",
            "Yuchun Fang (方昱春)": "方昱春",
            ", a recipient of the 2024 Baogang Outstanding Teacher Award.": "教授，她是2024年度宝钢优秀教师。",
            "⏰Timeline": "⏰经历",
            "Present": "至今",
            "Master's in CS,": "计算机科学与技术硕士，",
            "School of CES": "计算机工程与科学学院",
            "Bachelor's in AI,": "人工智能学士，",
            ", GPA: 3.57/4.": "，GPA：3.57/4。",
            "🗞️Papers and Patents": "🗞️论文与专利",
            "Beyond CTC Spikes: LLM-Driven Gloss-Temporal Supervision for Continuous Sign Language Recognition": "CTC尖峰之外：面向连续手语识别的LLM驱动手语词-时间监督",
            "The 31th Conference on Empirical Methods in Natural Language Processing (EMNLP 2026). Main Conference. 2026 Oct 24-29. ACL.": "EMNLP，主会，2026年10月24日至29日，ACL。",
            "Paper Link (coming soon).": "论文链接（即将上线）。",
            "CAAI-A, CCF-B, ICORE-A‌*‌‌ Conference": "CAAI-A、CCF-B、ICORE-A* 会议",
            "(Conference Link)": "（会议链接）",
            "Monocular Interacting-Hand Reconstruction with Multimodal Context Fusion and Spatial Attention": "基于多模态上下文融合与空间注意力的单目交互手重建",
            "ACM Transactions on Multimedia Computing, Communications, and Applications (TOMM). Regular Paper. 2026 Sep. ACM.": "TOMM，Regular Paper，2026年9月，ACM。",
            "Paper Link (ACM Library)": "论文链接（ACM Library）",
            "CCF-B, XinRui-2, JCR-Q1 Journal, IF=6.0": "CCF-B、新锐-2区、JCR-Q1期刊，IF=6.0",
            "(Journal Link)": "（期刊链接）",
            "1+1>2: achieving enhanced global pattern recognition with FSA-ResNet": "1+1>2：利用FSA-ResNet增强全局模式识别",
            "Third Asia Conference on Computer Vision, Image Processing, and Pattern Recognition (CVIPPR 2025) 2025 Jul 21 (Vol. 13697, pp. 168-176). SPIE.": "CVIPPR，2025年7月21日（Vol. 13697, pp. 168-176），SPIE。",
            "Paper Link (SPIE Library)": "论文链接（SPIE Library）",
            "EI-Indexed Conference": "EI检索会议",
            "💻Internships and Projects": "💻实习与项目",
            "2026.07~2026.08 | AI Application Engineer": "2026.07~2026.08 | AI应用工程师",
            "at": "于",
            "OriginCell Technology Group Co., Ltd.": "原能细胞科技集团有限公司",
            "· Built a Text-to-SQL query service with workflow orchestration using FastAPI and OpenAI SDK;": "· 使用FastAPI与OpenAI SDK构建带工作流编排的Text-to-SQL查询服务；",
            "· Built a LangGraph-based Agentic RAG system on equipment manuals to deliver traceable Q&A;": "· 基于LangGraph和设备说明书构建Agentic RAG系统，实现可追溯问答；",
            "· Built a MobileNet binary classifier to pre-filter coded wells with RKNN deployment on RK3568;": "· 构建MobileNet二分类模型对编码孔位进行预筛选，并通过RKNN部署至RK3568；",
            "· Built an warning system using YOLO and Java OpenCV for sample drop and mechanical error on Android.": "· 使用YOLO与Java OpenCV在Android端构建样本掉落与机械异常预警系统。",
            "2024.07~2024.08 | Quantitative Engineer": "2024.07~2024.08 | 量化工程师",
            "Shanghai JiuQianYi Software Co., Ltd.": "上海玖乾奕软件有限公司",
            "· Developed TWAP strategy code using C++ and gained exposure to multi-factor stock selection;": "· 使用C++开发TWAP策略代码，并接触多因子选股；",
            "· Automated trade position monitoring via Python callbacks with WeChat notifications;": "· 通过Python回调实现交易持仓自动监控，并通过企业微信推送通知；",
            "· Processed decades of tick data across exchanges using Python to facilitate backtesting.": "· 使用Python处理跨交易所数十年的Tick数据，为策略回测提供支持。",
            "2026.08~2026.09 | Personal-Decision Multi-Agent Application": "2026.08~2026.09 | 个人决策多智能体应用",
            "(personal project):": "（个人项目）：",
            "· Built a Plan-and-Execute workflow with incremental Replan using OpenAI SDK and task DAGs;": "· 使用OpenAI SDK与任务DAG构建Plan-and-Execute工作流，并支持增量Replan；",
            "· Built ReAct agents with MCP tools, LLM-as-Judge, self-evolving skills and constrained delegation;": "· 构建支持MCP工具、LLM-as-Judge、自进化Skills与受约束委派的ReAct智能体；",
            "· Designed a three-level memory system using SQLite and Qdrant;": "· 使用SQLite与Qdrant设计三级记忆系统；",
            "· Built a FastAPI + React + Vite application with SSE-based real-time trace visualization.": "· 构建FastAPI + React + Vite应用，并通过SSE实现实时轨迹可视化。",
            "Vedio Demo Link (Github)": "Demo链接（GitHub）",
            "2026.05~2026.06 | Multi-role Werewolf Agent Application": "2026.05~2026.06 | 多角色狼人杀智能体应用",
            "· Developed a multi-agent Werewolf app using LlamaIndex OpenAILike and custom agent orchestration;": "· 使用LlamaIndex OpenAILike与自定义智能体编排开发多智能体狼人杀应用；",
            "· Designed public/private message passing and memory management mechanisms;": "· 设计公开/私密消息传递与记忆管理机制；",
            "· Implemented structured LLM outputs with Pydantic validation and fallback handling;": "· 使用Pydantic校验与回退机制实现LLM结构化输出；",
            "· Built concurrent voting and PK resolution logic using ThreadPoolExecutor;": "· 使用ThreadPoolExecutor实现并发投票与平票PK处理逻辑；",
            "· Developed a Flask-based visualization frontend;": "· 开发基于Flask的可视化前端；",
            "2024.03~2024.05 | Undergraduate Innovation and Entrepreneurship Project": "2024.03~2024.05 | 大学生创新创业项目",
            "at SHU:": "（上海大学）：",
            "· Developed a knowledge-graph based diagnosis Question-Answering system;": "· 开发基于知识图谱的疾病诊断问答系统；",
            "2023.09~2023.12 | Undergraduate Innovation and Entrepreneurship Project": "2023.09~2023.12 | 大学生创新创业项目",
            "· Developed an app \"WhatToEat\" by using HarmonyOS-3.1 (API9) & ArkTS;": "· 使用HarmonyOS 3.1（API 9）与ArkTS开发“WhatToEat”应用；",
            "🥇Awards and Honors": "🥇荣誉与奖项",
            "2026.08 | Public rank 17/571 (Top 3%)": "2026.08 | Public榜第17/571（前3%）",
            ", Kaggle - Autonomous Agent Prediction Beta": "，Kaggle-Autonomous Agent Prediction Beta",
            "(Leaderboard)": "（排行榜）",
            "2025.05 | Meritorious Winner": "2025.05 | M奖",
            ", COMAP Mathematical Contest in Modeling": "，美国大学生数学建模竞赛",
            "2025.04 | Third Prize": "2025.04 | 三等奖",
            ", Huawei Software Elite Challenge": "，华为软件精英挑战赛",
            "2024.08 | Success Award": "2024.08 | 成功参赛奖",
            ", Asia and Pacific Mathematical Contest in Modeling - Chinese Event": "，亚太地区大学生数学建模竞赛-中文赛项",
            "2024.06 | Award of Excellence": "2024.06 | 优胜奖",
            ", 'Huawei ZhiLian Cup' Wireless Programming Competition": "，“华为智联杯”无线编程大赛",
            "2024.06 | Internet Platform Development Engineer Certification": "2024.06 | 互联网平台开发工程师认证",
            ", Ministry of Industry and Information;": "，工信部；",
            "2024.05 | Third Prize": "2024.05 | 三等奖",
            ", 'LanQiao Cup' Shanghai Division - C/C++ University Group A.": "，“蓝桥杯”上海赛区-C/C++大学A组。",
            "2026.06 | SHU Outstanding Undergraduate Thesis (Project)": "2026.06 | 上海大学优秀本科毕业论文（设计）",
            "2026.05 | SHU Outstanding Resume Design Award": "2026.05 | 上海大学优秀简历设计奖",
            "2026.04 | SHU Outstanding Graduate (Undergraduate)": "2026.04 | 上海大学优秀毕业生（本科）",
            "2025.11 | SHU Academic Scholarship": "2025.11 | 上海大学学业奖学金",
            "Self-Reliance Scholarship": "自强不息奖学金",
            "Innovation Scholarship": "创新创业奖学金",
            "2025.02 | SHU Outstanding Student Award": "2025.02 | 上海大学优秀学生",
            "2024.12 | SHU Academic Scholarship": "2024.12 | 上海大学学业奖学金",
            "2024.10 | Chinese Software Developer Network (CSDN) Hot-List Author": "2024.10 | 中国软件开发者网络（CSDN）热榜作者",
            "🎉News": "🎉动态",
            "As the sole student representative of SHU, participating in the Huawei Shanghai-Hefei Region HarmonyOS University Talent Exchange Forum.": "作为上海大学唯一学生代表，参加华为上海-合肥地区鸿蒙高校人才交流会。",
            "Recommended admission with waiver of entrance examination to the School of Computer Engineering and Science, Shanghai University, to pursue a Master's degree in Computer Science and Technology.": "获推荐免试录取至上海大学计算机工程与科学学院，攻读计算机科学与技术硕士学位。",
            "Presented a poster in-person at CVIPPR 2025, held in Xiamen, China, June 6–8, 2025.": "于2025年6月6日至8日在中国厦门举行的CVIPPR 2025会议进行线下海报展示。",
            "🙃Something Else": "🙃其他",
            "CET 4": "大学英语四级",
            "CET 6": "大学英语六级",
            "Mandarin Proficiency Test": "普通话水平测试",
            ": Level 2-B;": "：二级乙等；",
            "Technical skills": "技术技能",
            ": Python, Pytorch, LangGraph, C++, SQL, HTML, JAVA, git, Docker, VSCode, Codex...;": "：Python、Pytorch、LangGraph、C++、SQL、HTML、JAVA、git、Docker、VSCode、Codex...；",
            "- Original content (technical sharing, study notes, course design) on": "- 在",
            "CSDN blog": "CSDN博客",
            "has garnered over 180,000 views;": "发布原创内容（技术分享、学习笔记、课程设计），累计浏览量超过180,000；",
            "- Data contributior for \"Tobii Eye Tracking\" & \"EEG Word-Type Judgment\" at": "- 参与“Tobii眼动追踪”与“EEG词类型判断”数据采集，于",
            "SHU Brain-Like Computing Lab": "上海大学类脑计算实验室",
            "- Volunteer for the 48th ICPC Finals (Asia Region);": "- 第48届ICPC亚洲区域赛总决赛志愿者；",
            "- 2026 College Graduate Student Union Secretary Dept. Member;": "- 2026年院研究生会秘书部成员；",
            "- 2026 Student Dorm Management Committee Member;": "- 2026年学生社区楼管会成员；",
            "- Peer mentor for the 2023 undergraduate students of the school of CES, SHU;": "- 上海大学计算机工程与科学学院2023级本科生导生；",
            "- Operator of 2023-2025 SHU's QQ Universal Wall;": "- 2023-2025年上海大学QQ墙运营者；",
            "- Participant to the 2nd session of Fudan's High School Camp (The Convergence of AI & Philosophy);": "- 复旦大学第二期高中生营（人工智能与哲学的交汇）参与者；",
            "- Travel、Sports、Honor of Kings....": "- 旅行、运动、王者荣耀……",
            "Shanghai, China": "中国 上海",
            "Master's student in CS": "计算机科学与技术硕士",
            "CV, MLLM, DA...": "CV、MLLM、DA...",
            "Email": "邮箱",
            "CSDN Blog": "CSDN博客",
            "© 朱俊枫, Created: 2025.10 | Last updated: 2026.10": "© 朱俊枫，创建于：2025.10 | 最后更新：2026.10"
        };

        function collectOriginalTextNodes() {
            const walker = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode(node) {
                        const parent = node.parentElement;
                        if (!parent) return NodeFilter.FILTER_REJECT;
                        if (parent.closest('script, style, #language-toggle, #theme-toggle')) {
                            return NodeFilter.FILTER_REJECT;
                        }
                        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                        return NodeFilter.FILTER_ACCEPT;
                    }
                }
            );

            while (walker.nextNode()) {
                originalTextNodes.push({
                    node: walker.currentNode,
                    original: walker.currentNode.nodeValue
                });
            }
        }

        function updateThemeButton() {
            const button = document.getElementById('theme-toggle');
            const isDark = document.body.classList.contains('dark-mode');

            if (currentLanguage === 'zh') {
                button.innerHTML = isDark
                    ? '<i class="fas fa-sun"></i> 浅色模式'
                    : '<i class="fas fa-moon"></i> 深色模式';
            } else {
                button.innerHTML = isDark
                    ? '<i class="fas fa-sun"></i> Light Mode'
                    : '<i class="fas fa-moon"></i> Dark Mode';
            }
        }

        function updateLanguageButton() {
            document.getElementById('lang-zh').classList.toggle('active', currentLanguage === 'zh');
            document.getElementById('lang-en').classList.toggle('active', currentLanguage === 'en');
        }

        function setLanguage(language) {
            currentLanguage = language;
            document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
            document.title = language === 'zh'
                ? '朱俊枫 (J ZHU) - 个人主页'
                : 'Junfeng ZHU (朱俊枫) - HomePage';

            originalTextNodes.forEach(({ node, original }) => {
                const trimmed = original.trim();
                const leadingSpace = original.match(/^\s*/)[0];
                const trailingSpace = original.match(/\s*$/)[0];
                const translated = language === 'zh' && zhTranslations[trimmed]
                    ? zhTranslations[trimmed]
                    : trimmed;
                node.nodeValue = leadingSpace + translated + trailingSpace;
            });

            updateLanguageButton();
            updateThemeButton();
        }

        function initializeLanguageSwitcher() {
            collectOriginalTextNodes();

            document.getElementById('language-toggle').addEventListener('click', function() {
                setLanguage(currentLanguage === 'en' ? 'zh' : 'en');
            });

            setLanguage('en');
        }
