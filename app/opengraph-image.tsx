import { ImageResponse } from '@vercel/og';
import { seo } from '@/data/seo';
import { pageConfigs, colors, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, getDomainName, getVoxelBaseImage } from '@/lib/utils/og-image-utils';

export const runtime = 'edge';
export const alt = seo.pages.home.title;
export const size = {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
};
export const contentType = 'image/png';

export default async function Image() {
    const config = pageConfigs.home;
    const voxelImage = await getVoxelBaseImage();

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    background: colors.backgroundGradientStart,
                    position: 'relative',
                }}
            >
                {/* Voxel Image Background */}
                {voxelImage && (
                    <img
                        src={voxelImage as any}
                        alt="Profile Background"
                        width="1200"
                        height="630"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            // Use a blend mode to mix with gradient for better text readability
                            opacity: 0.6,
                        }}
                    />
                )}

                {/* Background gradient overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        // Adjust gradient transparency to let voxel show through
                        background: voxelImage
                            ? config.gradient.replace('rgba(59, 130, 246, 0.15)', 'rgba(59, 130, 246, 0.4)') // Darker overlay if image exists
                            : config.gradient,
                    }}
                />

                {/* Decorative corner (top-right) */}
                <div
                    style={{
                        position: 'absolute',
                        top: 40,
                        right: 40,
                        width: 150,
                        height: 150,
                        border: `2px solid ${colors.border}`,
                        borderRadius: 20,
                        opacity: 0.5,
                    }}
                />

                {/* Decorative corner (bottom-left) */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        left: 40,
                        width: 100,
                        height: 100,
                        border: `2px solid ${colors.border}`,
                        borderRadius: 16,
                        opacity: 0.5,
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '80px',
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        zIndex: 10,
                    }}
                >
                    {/* Top section with badge */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '12px 24px',
                                background: 'rgba(59, 130, 246, 0.2)',
                                border: `2px solid ${colors.border}`,
                                borderRadius: 12,
                                fontSize: 22,
                                fontWeight: 500,
                                color: colors.primary,
                                marginBottom: 40,
                            }}
                        >
                            {config.badge}
                        </div>

                        {/* Title */}
                        <div
                            style={{
                                fontSize: 72,
                                fontWeight: 700,
                                color: colors.text,
                                lineHeight: 1.1,
                                marginBottom: 24,
                                maxWidth: '900px',
                            }}
                        >
                            {seo.author.name}
                        </div>

                        {/* Subtitle */}
                        <div
                            style={{
                                fontSize: 36,
                                fontWeight: 400,
                                color: colors.textMuted,
                                lineHeight: 1.3,
                                maxWidth: '800px',
                            }}
                        >
                            {config.subtitle}
                        </div>
                    </div>

                    {/* Footer with branding */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                fontSize: 28,
                                fontWeight: 600,
                                color: colors.text,
                            }}
                        >
                            {config.title}
                        </div>
                        <div
                            style={{
                                fontSize: 24,
                                fontWeight: 400,
                                color: colors.textMuted,
                            }}
                        >
                            {getDomainName(seo.siteUrl)}
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
