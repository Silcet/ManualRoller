load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

def cc_repositories():
    http_archive(
        name = "uwebsockets",
        sha256 = "03dfc8037cf43856a41e64bbc7fc5a7cf5e6369c9158682753074ecbbe09eed1",
        strip_prefix = "uWebSockets-20.62.0",
        urls = [
            "https://github.com/uNetworking/uWebSockets/archive/refs/tags/v20.62.0.tar.gz",
        ],
        build_file = "//third-party:uwebsockets.BUILD"
    )

    http_archive(
        name = "usockets",
        sha256 = "d14d2efe1df767dbebfb8d6f5b52aa952faf66b30c822fbe464debaa0c5c0b17",
        strip_prefix = "uSockets-0.8.8",
        urls = [
            "https://github.com/uNetworking/uSockets/archive/refs/tags/v0.8.8.tar.gz",
        ],
        build_file = "//third-party:usockets.BUILD"
    )
