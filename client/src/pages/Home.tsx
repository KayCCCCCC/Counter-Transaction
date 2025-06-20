import { useState, useEffect } from "react";
import { Button } from "../components/ui/button.tsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card.tsx";
import {
    DollarSign,
    Wallet,
    CreditCard,
    TrendingUp,
    PiggyBank,
    Calculator,
    Shield,
    BarChart3,
    Target,
    Smartphone,
    ArrowRight,
    Menu,
    X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const features = [
        {
            icon: Wallet,
            title: "Quản lý ví điện tử",
            description: "Theo dõi và quản lý tất cả các ví điện tử của bạn ở một nơi",
            color: "bg-blue-500",
        },
        {
            icon: TrendingUp,
            title: "Phân tích đầu tư",
            description: "Công cụ phân tích chuyên sâu để tối ưu hóa danh mục đầu tư",
            color: "bg-green-500",
        },
        {
            icon: PiggyBank,
            title: "Tiết kiệm thông minh",
            description: "Lập kế hoạch tiết kiệm và đạt được mục tiêu tài chính",
            color: "bg-pink-500",
        },
        {
            icon: Calculator,
            title: "Tính toán tài chính",
            description: "Máy tính lãi suất, vay vốn và các công cụ tính toán khác",
            color: "bg-purple-500",
        },
        {
            icon: Shield,
            title: "Bảo mật tuyệt đối",
            description: "Mã hóa end-to-end và bảo vệ thông tin tài chính của bạn",
            color: "bg-orange-500",
        },
        {
            icon: BarChart3,
            title: "Báo cáo chi tiết",
            description: "Báo cáo tài chính chi tiết với biểu đồ trực quan",
            color: "bg-cyan-500",
        },
    ]

    const stats = [
        { icon: DollarSign, value: "10M+", label: "Giao dịch" },
        { icon: CreditCard, value: "500K+", label: "Người dùng" },
        { icon: Target, value: "99.9%", label: "Độ tin cậy" },
        { icon: Smartphone, value: "24/7", label: "Hỗ trợ" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            {/*<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">*/}
            {/*    <div className="container mx-auto px-4 py-4">*/}
            {/*        <div className="flex items-center justify-between">*/}
            {/*            <div className="flex items-center space-x-2">*/}
            {/*                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">*/}
            {/*                    <DollarSign className="w-6 h-6 text-white" />*/}
            {/*                </div>*/}
            {/*                <span className="text-xl font-bold text-gray-900">MoneyFlow</span>*/}
            {/*            </div>*/}

            {/*            /!* Desktop Navigation *!/*/}
            {/*            <nav className="hidden md:flex items-center space-x-8">*/}
            {/*                <Link to="#features" className="text-gray-600 hover:text-blue-600 transition-colors">*/}
            {/*                    Tính năng*/}
            {/*                </Link>*/}
            {/*                <Link to="#about" className="text-gray-600 hover:text-blue-600 transition-colors">*/}
            {/*                    Về chúng tôi*/}
            {/*                </Link>*/}
            {/*                <Link to="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">*/}
            {/*                    Bảng giá*/}
            {/*                </Link>*/}
            {/*                <Link to="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">*/}
            {/*                    Liên hệ*/}
            {/*                </Link>*/}
            {/*            </nav>*/}

            {/*            <div className="hidden md:flex items-center space-x-4">*/}
            {/*                <Button variant="outline">Đăng nhập</Button>*/}
            {/*                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">*/}
            {/*                    Dùng thử miễn phí*/}
            {/*                </Button>*/}
            {/*            </div>*/}

            {/*            /!* Mobile Menu Button *!/*/}
            {/*            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>*/}
            {/*                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}*/}
            {/*            </button>*/}
            {/*        </div>*/}

            {/*        /!* Mobile Menu *!/*/}
            {/*        {isMenuOpen && (*/}
            {/*            <div className="md:hidden mt-4 pb-4 border-t">*/}
            {/*                <nav className="flex flex-col space-y-4 mt-4">*/}
            {/*                    <Link to="#features" className="text-gray-600 hover:text-blue-600 transition-colors">*/}
            {/*                        Tính năng*/}
            {/*                    </Link>*/}
            {/*                    <Link to="#about" className="text-gray-600 hover:text-blue-600 transition-colors">*/}
            {/*                        Về chúng tôi*/}
            {/*                    </Link>*/}
            {/*                    <Link to="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">*/}
            {/*                        Bảng giá*/}
            {/*                    </Link>*/}
            {/*                    <Link to="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">*/}
            {/*                        Liên hệ*/}
            {/*                    </Link>*/}
            {/*                    <div className="flex flex-col space-y-2 pt-4">*/}
            {/*                        <Button variant="outline">Đăng nhập</Button>*/}
            {/*                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600">Dùng thử miễn phí</Button>*/}
            {/*                    </div>*/}
            {/*                </nav>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*</header>*/}

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <span>🎉</span>
                            <span>Miễn phí 30 ngày đầu tiên</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Quản lý tài chính
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                                thông minh
              </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Nền tảng quản lý tài chính cá nhân toàn diện giúp bạn theo dõi chi tiêu, đầu tư thông minh và đạt được mục
                            tiêu tài chính.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
                            >
                                Bắt đầu ngay
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                                Xem demo
                            </Button>
                        </div>
                    </div>

                    {/* Floating Icons Animation */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute inset-0 overflow-hidden">
                            {[DollarSign, Wallet, CreditCard, TrendingUp, PiggyBank, Calculator].map((Icon, index) => (
                                <div
                                    key={index}
                                    className={`absolute animate-bounce`}
                                    style={{
                                        left: `${20 + index * 15}%`,
                                        top: `${10 + (index % 3) * 20}%`,
                                        animationDelay: `${index * 0.5}s`,
                                        animationDuration: "3s",
                                    }}
                                >
                                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                                        <Icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Hero Image Placeholder */}
                        <div className="relative z-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
                            <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
                                <div className="text-center">
                                    <BarChart3 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                    <p className="text-gray-600">Dashboard Preview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center transform transition-all duration-500 hover:scale-105 ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Khám phá các công cụ mạnh mẽ giúp bạn quản lý tài chính hiệu quả
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <CardHeader>
                                    <div
                                        className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="container mx-auto text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sẵn sàng kiểm soát tài chính của bạn?</h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Tham gia cùng hàng nghìn người dùng đã tin tưởng MoneyFlow để quản lý tài chính thông minh.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                                Bắt đầu miễn phí
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
                            >
                                Tìm hiểu thêm
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <DollarSign className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-bold">MoneyFlow</span>
                            </div>
                            <p className="text-gray-400">Nền tảng quản lý tài chính thông minh cho mọi người.</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Sản phẩm</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Quản lý chi tiêu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Đầu tư thông minh
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Tiết kiệm
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Báo cáo
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Công ty</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Về chúng tôi
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Tuyển dụng
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Tin tức
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Liên hệ
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Hỗ trợ</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Trung tâm trợ giúp
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Bảo mật
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Điều khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Quyền riêng tư
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 MoneyFlow. Tất cả quyền được bảo lưu.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
